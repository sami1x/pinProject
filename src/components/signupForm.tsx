import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn} from "next-auth/react"


export default function SignupForm() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [timer, setTimer] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [threeZeros, setThreeZeros] = useState(true);
    const [showCodeField, setShowCodeField] = useState(false);
    const [errorUserExists, setErrorUserExists] = useState("");
    const [showLoader, setShowLoader] = useState(false);

    function validateEmail() {
        if (emailValue != "") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsEmailValid(emailRegex.test(emailValue));
        } else {
            setIsEmailValid(true);
        }
    }

    function validatePassword() {
        if (passwordValue != "") {
            const minLength = 8;
            const hasUpperCase = /[A-Z]/.test(passwordValue);
            const hasLowerCase = /[a-z]/.test(passwordValue);
            const hasDigits = /\d/.test(passwordValue);
            const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]/.test(
                passwordValue
            );
            setIsPasswordValid(
                passwordValue.length >= minLength &&
                hasUpperCase &&
                hasLowerCase &&
                hasDigits &&
                hasSpecialChars
            );
        } else {
            setIsPasswordValid(true);
        }
    }

    useEffect(() => {
        let countdown: any;
        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        if (timer == 0) {
            console.log("zero");
            setButtonDisabled(false);
        }
        if (timer == 9) {
            setThreeZeros(true);
        }
        if (timer > 10) {
            setThreeZeros(false);
        }

        return () => {
            clearInterval(countdown);
        };
    }, [timer]);

    const handleNumberChange = (event: any) => {
        setErrorUserExists("");
        const newValue = event.target.value;
        if (/^\d*$/.test(newValue) && newValue.length <= 5) {
            setNumberValue(newValue);
        }
    };

    const handleActiveButton = () => {
        setTimer(15);
        setButtonDisabled(true);
        handleSubmit();
        setShowLoader(false);
        setErrorUserExists("");
        setNumberValue("");
    };

    const handleSubmit = async () => {
        if (
            emailValue != "" &&
            passwordValue != "" &&
            isEmailValid &&
            isPasswordValid
        ) {
            try {
                setShowLoader(true);
                const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/verifyemail`;
                const userData = {
                    email: emailValue.trim()
                };

                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                });

                if (response.ok) {
                    setShowCodeField(true);
                    setTimer(15);
                    setButtonDisabled(true);
                } else if (response.status == 409) {
                    setErrorUserExists("User already exists");
                } else {
                    throw new Error("Failed to verify email");
                }

                setShowLoader(false);
            } catch (error) {
                console.error("Internal Server Error");
                setShowLoader(false);
            }
        }
    };

    const handleVerifyCode = async () => {
        if (numberValue.length == 5) {
            try {
                setShowLoader(true);

                const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/adduser`;
                const userData = {
                    username: emailValue.trim().split("@")[0],
                    email: emailValue.trim(),
                    password: passwordValue,
                    code: numberValue
                };

                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("User aaaadded successfully:", data);
                } else if (response.status === 400) {
                    const data = await response.json();
                    console.log("response:", data);
                    setErrorUserExists("Code is incorrect");
                } else {
                    throw new Error("Failed to add user");
                }
                setShowLoader(false);
            } catch (error) {
                setShowLoader(false);

                console.error("Error adding user:", error);
            }
        }
    };

    return (
        <>
            {!showCodeField ? (
                <div className="w-full h-full flex items-center flex-col">
                    <div>signup</div>
                    <div className="flex flex-col gap-1 max-w-[268px] w-full ">
                        <label className="px-2 text-sm">Email</label>
                        <input
                            onBlur={validateEmail}
                            value={emailValue}
                            onChange={(event) => {
                                if (errorUserExists !== "") {
                                    setErrorUserExists("");
                                }
                                setEmailValue(event.target.value);
                            }}
                            placeholder="Email"
                            className="px-3 transition- border-slate-300 border-2 h-12 rounded-xl"
                            type="text"
                        />
                        {!isEmailValid ? (
                            <div className="w-full text-center text-xs text-red-500">
                                Hmmm... that doesn't look like an email address
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="w-full text-center text-xs text-red-500">
                            {errorUserExists}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 max-w-[268px] w-full ">
                        <label className="px-2 mt-2 text-sm">Password</label>
                        <input
                            onBlur={validatePassword}
                            value={passwordValue}
                            onChange={(event) => setPasswordValue(event.target.value)}
                            placeholder="Create a password"
                            className="px-3 border-slate-300 border-2 h-12 rounded-xl"
                            type="password"
                        />
                        {!isPasswordValid ? (
                            <div className="w-full text-center text-xs text-red-500">
                                password must contain Uppercase letters, Lowercase letters,
                                Numbers and Special Symbols
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-[#e60023] relative font-bold text-white rounded-full h-10 mt-2 w-full max-w-[268px]"
                    >
                        Continue
                        <div className="absolute right-0 top-0">
                            {showLoader ? (
                                <div className="relative h-10 w-10 mr-2 ">
                                    <Image
                                        alt="loading"
                                        src={"/loader.svg"}
                                        fill
                                        sizes="100%"
                                    ></Image>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </button>
                    <span className="font-bold text-base mt-2">OR</span>
                    <div 
                    onClick={() => signIn("google")}
                    className="border-[1px] cursor-pointer border-slate-300 flex-center gap-3 rounded-full h-10 mt-2 w-full max-w-[268px]">
                        <div className="relative cursor-pointer self-center flex-center w-[19px] h-[19px]">
                            <Image
                                alt="logo"
                                src={"/google.png"}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="width:100%"
                            ></Image>
                        </div>
                        <div className="font-medium">Continue with Google</div>
                    </div>
                </div>
            ) : (
                <div className="w-full flex flex-col items-center">
                    <input
                        value={numberValue}
                        onChange={handleNumberChange}
                        type="text"
                        className="outline-none py-2 h-16 w-52 text-center text-3xl border-b-[1px] border-black"
                    />
                    <div className="w-full mt-2 text-center text-xs text-red-500">
                        {errorUserExists}
                    </div>

                    <div className="w-full px-6 gap-2 flex flex-col-reverse justify-between mt-2">
                        <div className=" h-full flex-center">
                            <span>{threeZeros ? "00:0" : "00:"}</span> {timer}
                            <button
                                style={{ color: buttonDisabled ? "gray" : "black" }}
                                disabled={buttonDisabled}
                                onClick={handleActiveButton}
                                className="font-bold ml-1"
                            >
                                Resend
                            </button>
                        </div>
                        <button
                            onClick={handleVerifyCode}
                            className="bg-[#e60023] relative font-bold text-white rounded-full h-10 px-4 "
                        >
                            Continue
                            <div className="absolute right-0 top-0">
                                {showLoader ? (
                                    <div className="relative h-10 w-10 mr-2 ">
                                        <Image
                                            alt="loading"
                                            src={"/loader.svg"}
                                            fill
                                            sizes="100%"
                                        ></Image>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

#!/usr/bin/env node 
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function startfunction() {
    return __awaiter(this, void 0, void 0, function* () {
        const systemNum = Math.floor(Math.random() * 10);
        const userNum = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "userGuess",
                message: "Enter your Number b/w 1 - 10: "
            }
        ]);
        const { userGuess } = userNum;
        console.log("Your Guess: ", userGuess, "\nsystem's Guess", systemNum);
        if (userGuess === systemNum) {
            console.log(" Your Guess is Correct \nYou win!");
        }
        else {
            console.log("Better Luck Next Time");
        }
    });
}
function startAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield startfunction();
            var again = yield inquirer_1.default.prompt({
                type: "input",
                name: "restart",
                message: "Do You Want To Continue? Press Y or N"
            });
        } while (again.restart === "Y" || again.restart === "Y" || again.restart === "YES" || again.restart === "yes");
    });
}
startAgain();

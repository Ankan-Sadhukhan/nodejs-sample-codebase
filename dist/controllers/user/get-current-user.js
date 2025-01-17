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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = void 0;
const controller_1 = require("@config/controller/controller");
/**
 * This function is used to get logged in user details
 * @param req
 * @param res
 */
exports.getCurrentUser = (0, controller_1.controller)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userDetails } = req;
    res.status(200).send(userDetails);
}));
//# sourceMappingURL=get-current-user.js.map
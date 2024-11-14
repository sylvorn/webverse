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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var bcrypt_1 = require("bcrypt");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var softwareCategory, healthcareCategory, customSoftwareService, healthcareAppService, enterprisePlan, trialPlan, hasedPassword, user3, user4, user5, subscription4, subscription5, subscription6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.category.create({
                        data: {
                            name: "Software Development",
                        },
                    })];
                case 1:
                    softwareCategory = _a.sent();
                    return [4 /*yield*/, prisma.category.create({
                            data: {
                                name: "Healthcare",
                            },
                        })];
                case 2:
                    healthcareCategory = _a.sent();
                    return [4 /*yield*/, prisma.service.create({
                            data: {
                                name: "Custom Software Solutions",
                                description: "Tailored software development for businesses",
                                categoryId: softwareCategory.id,
                            },
                        })];
                case 3:
                    customSoftwareService = _a.sent();
                    return [4 /*yield*/, prisma.service.create({
                            data: {
                                name: "Healthcare Management App",
                                description: "App to manage patient records and scheduling",
                                categoryId: healthcareCategory.id,
                            },
                        })];
                case 4:
                    healthcareAppService = _a.sent();
                    return [4 /*yield*/, prisma.plan.create({
                            data: {
                                name: "Enterprise Plan",
                                description: "Enterprise-level access with extended features",
                                price: 10000,
                                duration: 24, // in months
                                serviceId: customSoftwareService.id,
                            },
                        })];
                case 5:
                    enterprisePlan = _a.sent();
                    return [4 /*yield*/, prisma.plan.create({
                            data: {
                                name: "Trial Plan",
                                description: "Free trial plan for new customers",
                                price: 0,
                                duration: 1, // in months
                                serviceId: healthcareAppService.id,
                            },
                        })];
                case 6:
                    trialPlan = _a.sent();
                    return [4 /*yield*/, (0, bcrypt_1.hash)("password", 10)];
                case 7:
                    hasedPassword = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                fname: "Alice",
                                lname: "Johnson",
                                email: "alice.johnson@example.com",
                                password: hasedPassword,
                                mobile: "4561237890",
                                role: "Client",
                                isVerfiy: true,
                                marketingEmails: false,
                                updatesEmails: true,
                            },
                        })];
                case 8:
                    user3 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                fname: "Bob",
                                lname: "Williams",
                                email: "bob.williams@example.com",
                                password: hasedPassword,
                                mobile: "7891234560",
                                role: "Client",
                                isVerfiy: true,
                                marketingEmails: true,
                                updatesEmails: false,
                            },
                        })];
                case 9:
                    user4 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                fname: "Eve",
                                lname: "Taylor",
                                email: "eve.taylor@example.com",
                                password: hasedPassword,
                                mobile: "1237894560",
                                role: "Admin",
                                isVerfiy: true,
                            },
                        })];
                case 10:
                    user5 = _a.sent();
                    return [4 /*yield*/, prisma.subscription.create({
                            data: {
                                status: "Active",
                                startDate: new Date(),
                                endDate: new Date(new Date().setMonth(new Date().getMonth() + 12)),
                                userId: user3.id,
                                planId: enterprisePlan.id,
                            },
                        })];
                case 11:
                    subscription4 = _a.sent();
                    return [4 /*yield*/, prisma.subscription.create({
                            data: {
                                status: "Expired",
                                startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
                                endDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                                userId: user4.id,
                                planId: trialPlan.id,
                            },
                        })];
                case 12:
                    subscription5 = _a.sent();
                    return [4 /*yield*/, prisma.subscription.create({
                            data: {
                                status: "Pending",
                                startDate: new Date(),
                                endDate: new Date(new Date().setMonth(new Date().getMonth() + 3)),
                                userId: user4.id,
                                planId: trialPlan.id,
                            },
                        })];
                case 13:
                    subscription6 = _a.sent();
                    // Additional licenses with edge cases (e.g., expired, about to expire)
                    return [4 /*yield*/, prisma.license.createMany({
                            data: [
                                {
                                    licenseKey: "LMN456OPQ",
                                    expiryDate: new Date(new Date().setDate(new Date().getDate() + 30)), // Expires in 30 days
                                    status: "Active",
                                    userId: user3.id,
                                    serviceId: customSoftwareService.id,
                                    subscriptionId: subscription4.id,
                                },
                                {
                                    licenseKey: "UVW987XYZ",
                                    expiryDate: new Date(new Date().setDate(new Date().getDate() - 10)), // Expired 10 days ago
                                    status: "Expired",
                                    userId: user4.id,
                                    serviceId: healthcareAppService.id,
                                    subscriptionId: subscription5.id,
                                },
                            ],
                        })];
                case 14:
                    // Additional licenses with edge cases (e.g., expired, about to expire)
                    _a.sent();
                    // Additional payments with varied amounts, methods, and statuses
                    return [4 /*yield*/, prisma.payment.createMany({
                            data: [
                                {
                                    amount: 10000,
                                    currency: "USD",
                                    paymentDate: new Date(new Date().setMonth(new Date().getMonth() - 6)), // 6 months ago
                                    status: "Completed",
                                    method: "Bank Transfer",
                                    userId: user3.id,
                                    subscriptionId: subscription4.id,
                                    razorpayPaymentId: "razorpay456123",
                                },
                                {
                                    amount: 0,
                                    currency: "USD",
                                    paymentDate: new Date(new Date().setDate(new Date().getDate() - 5)), // 5 days ago
                                    status: "Completed",
                                    method: "Credit Card",
                                    userId: user4.id,
                                    subscriptionId: subscription5.id,
                                },
                                {
                                    amount: 1000,
                                    currency: "USD",
                                    paymentDate: new Date(),
                                    status: "Pending",
                                    method: "Paypal",
                                    userId: user4.id,
                                    subscriptionId: subscription6.id,
                                },
                            ],
                        })];
                case 15:
                    // Additional payments with varied amounts, methods, and statuses
                    _a.sent();
                    console.log("Extended dummy data with additional variations inserted successfully!");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });

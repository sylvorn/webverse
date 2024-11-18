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
        var educationCategory, itServicesCategory, schoolManagementService, libraryManagementService, webDevService, basicPlan, premiumPlan, webDevMonthlyPlan, hasedPassword, user1, user2, adminUser, subscription1, subscription2, subscription3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.category.create({
                        data: {
                            name: "Finance",
                        },
                    })];
                case 1:
                    educationCategory = _a.sent();
                    return [4 /*yield*/, prisma.category.create({
                            data: {
                                name: "IT Services",
                            },
                        })];
                case 2:
                    itServicesCategory = _a.sent();
                    return [4 /*yield*/, prisma.solution.create({
                            data: {
                                name: "School Management System",
                                description: "A comprehensive school management software",
                                categoryId: educationCategory.id,
                            },
                        })];
                case 3:
                    schoolManagementService = _a.sent();
                    return [4 /*yield*/, prisma.solution.create({
                            data: {
                                name: "Library Management System",
                                description: "Software to manage library operations",
                                categoryId: educationCategory.id,
                            },
                        })];
                case 4:
                    libraryManagementService = _a.sent();
                    return [4 /*yield*/, prisma.solution.create({
                            data: {
                                name: "Web Development Service",
                                description: "Full-stack web development services",
                                categoryId: itServicesCategory.id,
                            },
                        })];
                case 5:
                    webDevService = _a.sent();
                    // Create features
                    return [4 /*yield*/, prisma.features.createMany({
                            data: [
                                {
                                    title: "Attendance Tracking",
                                    content: "Track student attendance",
                                    solutionId: schoolManagementService.id,
                                },
                                {
                                    title: "Library Catalog",
                                    content: "Manage and search books",
                                    solutionId: libraryManagementService.id,
                                },
                                {
                                    title: "Responsive Design",
                                    content: "Fully responsive web pages",
                                    solutionId: webDevService.id,
                                },
                            ],
                        })];
                case 6:
                    // Create features
                    _a.sent();
                    return [4 /*yield*/, prisma.plan.create({
                            data: {
                                name: "Basic Plan",
                                description: "Affordable plan for small schools",
                                price: 500,
                                duration: 6, // in months
                                solutionId: schoolManagementService.id,
                            },
                        })];
                case 7:
                    basicPlan = _a.sent();
                    return [4 /*yield*/, prisma.plan.create({
                            data: {
                                name: "Premium Plan",
                                description: "Extended features for large institutions",
                                price: 2000,
                                duration: 12, // in months
                                solutionId: schoolManagementService.id,
                            },
                        })];
                case 8:
                    premiumPlan = _a.sent();
                    return [4 /*yield*/, prisma.plan.create({
                            data: {
                                name: "Monthly Web Dev Plan",
                                description: "Subscription for ongoing web development",
                                price: 1000,
                                duration: 1, // in months
                                solutionId: webDevService.id,
                            },
                        })];
                case 9:
                    webDevMonthlyPlan = _a.sent();
                    return [4 /*yield*/, (0, bcrypt_1.hash)("password", 10)];
                case 10:
                    hasedPassword = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                fname: "John",
                                lname: "Doe",
                                email: "john.doe@example.com",
                                password: hasedPassword,
                                mobile: "1234567890",
                                role: "Client",
                                isVerfiy: true,
                            },
                        })];
                case 11:
                    user1 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                fname: "Jane",
                                lname: "Smith",
                                email: "jane.smith@example.com",
                                password: hasedPassword,
                                mobile: "0987654321",
                                role: "Client",
                                isVerfiy: true,
                            },
                        })];
                case 12:
                    user2 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                fname: "Admin",
                                lname: "User",
                                email: "admin@example.com",
                                password: hasedPassword,
                                role: "Admin",
                                isVerfiy: true,
                            },
                        })];
                case 13:
                    adminUser = _a.sent();
                    return [4 /*yield*/, prisma.subscription.create({
                            data: {
                                status: "Active",
                                startDate: new Date(),
                                endDate: new Date(new Date().setMonth(new Date().getMonth() + 6)),
                                userId: user1.id,
                                planId: basicPlan.id,
                            },
                        })];
                case 14:
                    subscription1 = _a.sent();
                    return [4 /*yield*/, prisma.subscription.create({
                            data: {
                                status: "Expired",
                                startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                                endDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1, new Date().getMonth() + 6)),
                                userId: user2.id,
                                planId: premiumPlan.id,
                            },
                        })];
                case 15:
                    subscription2 = _a.sent();
                    return [4 /*yield*/, prisma.subscription.create({
                            data: {
                                status: "Pending",
                                startDate: new Date(),
                                endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
                                userId: user2.id,
                                planId: webDevMonthlyPlan.id,
                            },
                        })];
                case 16:
                    subscription3 = _a.sent();
                    // Create licenses
                    return [4 /*yield*/, prisma.license.createMany({
                            data: [
                                {
                                    licenseKey: "ABC123XYZ",
                                    expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                                    status: "Active",
                                    userId: user1.id,
                                    solutionId: schoolManagementService.id,
                                    subscriptionId: subscription1.id,
                                },
                                {
                                    licenseKey: "XYZ789ABC",
                                    expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                                    status: "Expired",
                                    userId: user2.id,
                                    solutionId: libraryManagementService.id,
                                    subscriptionId: subscription2.id,
                                },
                            ],
                        })];
                case 17:
                    // Create licenses
                    _a.sent();
                    // Create payments
                    return [4 /*yield*/, prisma.payment.createMany({
                            data: [
                                {
                                    amount: 500,
                                    currency: "USD",
                                    paymentDate: new Date(new Date().setMonth(new Date().getMonth() - 2)),
                                    status: "Completed",
                                    method: "Credit Card",
                                    userId: user1.id,
                                    subscriptionId: subscription1.id,
                                    razorpayPaymentId: "razorpay123456",
                                },
                                {
                                    amount: 2000,
                                    currency: "USD",
                                    paymentDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                                    status: "Completed",
                                    method: "Bank Transfer",
                                    userId: user2.id,
                                    subscriptionId: subscription2.id,
                                    razorpayPaymentId: "razorpay7891011",
                                },
                                {
                                    amount: 1000,
                                    currency: "USD",
                                    paymentDate: new Date(),
                                    status: "Pending",
                                    method: "Credit Card",
                                    userId: user2.id,
                                    subscriptionId: subscription3.id,
                                },
                            ],
                        })];
                case 18:
                    // Create payments
                    _a.sent();
                    console.log("Dummy data with variations inserted successfully!");
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

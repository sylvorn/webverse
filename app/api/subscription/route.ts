// import Razorpay from "razorpay";
// import { NextRequest, NextResponse } from "next/server";

// const razorpay = new Razorpay({
//   key_id: process.env.key_id!,
//   key_secret: process.env.key_secret,
// });

// export async function POST(request: NextRequest) {
//   const { planId, serviceId } = (await request.json()) as {
//     planId: string;
//     serviceId: string;
//   };

//   let options = {
//     plan_id: planId,
//     total_count: 12,
//     notes: {
//       serviceId: serviceId,
//     },
//   };
//   const subscription = await razorpay.subscriptions.create(options);
//   console.log(subscription);
//   return NextResponse.json({ subscriptionId: subscription.id });
// }

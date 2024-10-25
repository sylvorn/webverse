import { randomBytes } from "crypto";

export default function generateOTP(): string {
  const buffer = randomBytes(3);
  const otp = buffer.readUIntBE(0, 3) % 1000000;
  return otp.toString().padStart(6, "0");
}

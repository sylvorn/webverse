import { randomBytes, webcrypto } from "crypto";

export default function generateOTP(): string {
  const array = new Uint32Array(1);
  webcrypto.getRandomValues(array);
  const otp = array[0] % 1000000;
  return otp.toString().padStart(6, "0");
}

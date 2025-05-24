import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RecenetPaymentPropsArray } from "@/types";
import dayjs from "dayjs";

export function RecentPayments({ items }: RecenetPaymentPropsArray) {
  if (items.length > 0) {
    return (
      <div className="space-y-8">
        {items.map((item, idx) => {
          return (
            <div className="flex items-center" key={idx}>
              <Avatar className="h-9 w-9">
                <AvatarImage src="" alt="Avatar" />
                <AvatarFallback>{item.serviceName[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{item.serviceName}</p>
                <p className="text-sm text-muted-foreground">{dayjs(item.paymentDate).format("D MM YYYY").toString()}</p>
              </div>
              <div className="ml-auto font-medium">{item.amount}</div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="space-y-8 flex justify-center items-center">
        <div className="aspect-ratio h-[310px] w-full flex justify-center items-center font-bold text-black dark:text-white leading-none">
          <p>No Data To Display</p>
        </div>
      </div>
    );
  }
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RecentSalesItemProps, RecentSalesItemPropsArray } from "@/types";

export function RecentSales({ items }: RecentSalesItemPropsArray) {
  return (
    <div className="space-y-8">
      {items.map((item, idx) => {
        return (
          <div className="flex items-center" key={idx}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="" alt="Avatar" />
              <AvatarFallback>{item.fname[0] + item.lname[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.fname + " " + item.lname}</p>
              <p className="text-sm text-muted-foreground">{item.email}</p>
            </div>
            <div className="ml-auto font-medium">{item.amount}</div>
          </div>
        );
      })}
    </div>
  );
}

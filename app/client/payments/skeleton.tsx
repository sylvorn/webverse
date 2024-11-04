import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const breadcrumbItems = [
  { title: "Dashboard", link: "/client/dashboard" },
  { title: "Payments", link: "/client/payments" },
];

export default function PaymentPageSkeleton() {
  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <Skeleton className="h-8 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <Separator />

        <div className="w-full">
          <div className="flex items-center py-4">
            <Skeleton className="h-9 w-[250px]" />
            <Skeleton className="ml-4 h-9 w-[180px]" />
            <Skeleton className="ml-auto h-9 w-[100px]" />
          </div>
          <ScrollArea className="h-[calc(80vh-220px)] rounded-md border md:h-[calc(80dvh-200px)]">
            <Table>
              <TableHeader>
                <TableRow>
                  {[...Array(5)].map((_, index) => (
                    <TableHead key={index}>
                      <Skeleton className="h-6 w-full" />
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(10)].map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {[...Array(5)].map((_, cellIndex) => (
                      <TableCell key={cellIndex}>
                        <Skeleton className="h-6 w-full" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="space-x-2 flex justify-center items-center">
              <Skeleton className="h-9 w-[80px]" />
              <Skeleton className="h-9 w-[80px]" />
            </div>
            <Skeleton className="h-9 w-[100px]" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

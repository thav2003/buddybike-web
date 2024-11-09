import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>PT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Phạm Hoàng Thủy Tiên
          </p>
          <p className="text-sm text-muted-foreground">Đại học FPT</p>
        </div>
        <div className="ml-auto font-medium">200.000 đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>VL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Võ Nguyễn Hoàng Long
          </p>
          <p className="text-sm text-muted-foreground">Đại học FPT</p>
        </div>
        <div className="ml-auto font-medium">75.000 đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Mai Nguyễn Hoàng An
          </p>
          <p className="text-sm text-muted-foreground">Đại học Y Dược TP.HCM</p>
        </div>
        <div className="ml-auto font-medium">50.000 đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>TV</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Trương Hoàng Anh Vũ
          </p>
          <p className="text-sm text-muted-foreground">Đại học FPT</p>
        </div>
        <div className="ml-auto font-medium">30.000 đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>LH</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lê Gia Hân</p>
          <p className="text-sm text-muted-foreground">Đại học FPT</p>
        </div>
        <div className="ml-auto font-medium">30.000 đ</div>
      </div>
    </div>
  );
}

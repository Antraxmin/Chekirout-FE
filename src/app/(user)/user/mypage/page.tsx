import Image from "next/image";
import Link from "next/link";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MyPage() {
  // 임시데이터
  const userInfo = {
    name: "황다경",
    department: "컴퓨터소프트웨어공학과 ",
    studentId: "20204023",
  };

  return (
    <main className="relative flex flex-col items-center">
      <div className="relative">
        <Image src="/assets/Card.png" alt="카드" width={332} height={480} />
        <div className="absolute top-4 right-4 text-right text-white">
          <p className="font-bold text-2xl">{userInfo.name}</p>
          <p className="text-base">{userInfo.department}</p>
          <p className="text-base">{userInfo.studentId}</p>
        </div>
      </div>
      <Link href="/user/mypage/edit" passHref>
        <Button className="mt-4 flex items-center gap-2 bg-white text-slate-900 shadow-sm rounded-full w-32 hover:bg-slate-900 hover:text-white">
          <Edit className="w-4 h-4" />
          수정하기
        </Button>
      </Link>
    </main>
  );
}

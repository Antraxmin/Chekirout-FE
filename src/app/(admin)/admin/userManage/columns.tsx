"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

const departmentMapping: { [key: string]: string } = {
  CSE: "컴퓨터소프트웨어공학과",
  MEDIT: "의료IT공학과",
  IOT: "사물인터넷학과",
  IP: "정보보호학과",
  AI_BIGDATA: "AI빅데이터공학과",
  METABUS: "메타버스게임학과",
};

export type User = {
  username: string;
  department: string;
  name: string;
  role: "STUDENT" | "ADMIN";
  isNotificationEnabled: boolean;
  phoneNumber: string;
  email: string;
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="모두 선택"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="행 선택"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          학번
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: "이름",
  },
  {
    accessorKey: "department",
    header: "학과",
    cell: ({ row }) => {
      const department = row.getValue("department") as string;
      return departmentMapping[department] || department;
    },
  },
  {
    accessorKey: "role",
    header: "역할",
  },
  {
    accessorKey: "isNotificationEnabled",
    header: "알림 허용",
    cell: ({ row }) => (
      <span>{row.getValue("isNotificationEnabled") ? "예" : "아니오"}</span>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: "전화번호",
  },
  {
    accessorKey: "email",
    header: "이메일",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">메뉴 열기</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>작업</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.username)}>
              학번 복사
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>정보 수정</DropdownMenuItem>
            <DropdownMenuItem>차단</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

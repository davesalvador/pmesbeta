"use client";
import { FullConversationType } from "@/app/types";
import { MDOutlineGroupAdd } from "react-icons/md";
import { useState } from "react";
import useConversation from "@/app/hooks/useConversation";
import clsx from "clsx";
import { useRouter } from "next/navigation";

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
}) => {
  const [items, setItems] = useState(initialItems);

  const router = useRouter();

  const { conversationId, isOpen } = useConversation();
  return (
    <aside
      className={clsx(
        `
  fixed 
  inset-y-0
  pb-20
  lg:pb-0
  lg:left-20
  lg:w-80
  lg:block
  overflow-y-auto
  border-r
  border-gray-200
  `,
        isOpen ? "hidden" : "block w-full left-0"
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div
            className="
          text-2xl
          font-blod
          text-neutral-800
          "
          >
            messages
          </div>
          <div>
            <MdOutlineGroupAdd />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ConversationList;

{
  34323;
}
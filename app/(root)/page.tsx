"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal isOpen onClose={() => {}} title="Test" description="Test Desc">
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;

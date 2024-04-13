"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Activity from "./Activity";
import CreateActivityForm from "./CreateActivityForm";
import Modal from "../../core/Modal";
import Button from "../../core/Button";

const Activities = ({ activities }: any) => {
  const [showActivityModal, setShowActivityModal] = useState(false);

  return (
    <>
      <Modal
        title="Create an activity"
        showModal={showActivityModal}
        closeModal={() => setShowActivityModal(false)}
      >
        <CreateActivityForm />
      </Modal>
      {!activities.length ? (
        <p className="mb-4">No activities added yet...</p>
      ) : null}
      {activities.map((item: any) => (
        <Activity key={item.id} activity={item} />
      ))}

      <div className="mb-4">
        <Button
          intent="flat"
          type="button"
          onClick={() => setShowActivityModal(true)}
        >
          <PlusCircleIcon className="w-6 h-6 mr-1" /> Activity
        </Button>
      </div>
    </>
  );
};

export default Activities;

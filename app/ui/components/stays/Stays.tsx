"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
// import Activity from "./Activity";
import CreateStayForm from "./CreateStayForm";
import Modal from "../../core/Modal";
import Button from "../../core/Button";
import Stay from "./Stay";

const Activities = ({ stays = [], allowEdits, tripId }: any) => {
  const [showStayModal, setShowStayModal] = useState(false);

  return (
    <>
      <Modal
        title="Create a stay"
        showModal={showStayModal}
        closeModal={() => setShowStayModal(false)}
      >
        <CreateStayForm
          tripId={tripId}
          closeModal={() => setShowStayModal(false)}
        />
      </Modal>
      {!stays.length ? <p className="mb-4">No stays added yet...</p> : null}
      {stays.map((item: any) => (
        <Stay key={item.id} stay={item} allowEdits={allowEdits} />
      ))}

      {allowEdits ? (
        <div className="mb-4">
          <Button
            intent="flat"
            type="button"
            onClick={() => setShowStayModal(true)}
          >
            <PlusCircleIcon className="w-6 h-6 mr-1" /> Stay
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default Activities;

"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CreateTripGoerForm from "./CreateTripGoerForm";
import Modal from "../../core/Modal";
import Button from "../../core/Button";

const TripGoers = ({ allowEdits, tripId, token, tripgoers }: any) => {
  const [showTripGoerModal, setShowTripGoerModal] = useState(false);

  return (
    <div>
      <Modal
        title="Add a friend!"
        showModal={showTripGoerModal}
        closeModal={() => setShowTripGoerModal(false)}
      >
        <CreateTripGoerForm
          tripId={tripId}
          token={token}
          closeModal={() => setShowTripGoerModal(false)}
        />
      </Modal>

      {allowEdits ? (
        <div>
          <h3 className="uppercase font-bold text-md mb-2">Trip Goers</h3>
          <ul className="mb-4">
            {tripgoers.map((tripgoer: any) => (
              <li key={tripgoer.id}>{tripgoer.name}</li>
            ))}
          </ul>
          <div className="mb-4">
            <Button
              intent="flat"
              type="button"
              onClick={() => setShowTripGoerModal(true)}
            >
              <PlusCircleIcon className="w-6 h-6 mr-1" /> Trip Goer
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TripGoers;

import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ children, onClose, isOpen, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex  justify-center  bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl my-4 animate-fadeIn">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-semibold text-primary">{title}</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 focus:outline-none transition-all"
          >
            <MdClose size={24} />
          </button>
        </div>
        {/* Modal Content */}
        <div className=" mt-4 ">{children}</div>
      </div>
    </div>
  );
}


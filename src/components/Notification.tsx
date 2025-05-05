import { useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";

export const Notification = () => {
  const notification = useAppStore((state) => state.notification);
  const resetNotification = useAppStore((state) => state.resetNotification);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!notification) return;
    // show notification
    setVisible(true);
    // start hiding after 4000ms
    const hideTimeOut = setTimeout(() => {
      setVisible(false);
    }, 4000);
    // delete notification after 4500ms
    const resetTimeOut = setTimeout(() => {
      resetNotification();
    }, 4500);
    return () => {
      //clean on unmount or change
      clearTimeout(resetTimeOut);
      clearTimeout(hideTimeOut);
    };
  }, [notification]);

  return notification ? (
    <div className="fixed h-32 top-0 left-0 right-0 flex items-center justify-center px-4 z-60 pointer-events-none">
      <div
        className={`${
          notification.error ? "bg-red-800" : "bg-slate-800"
        } border-2 border-slate-600 rounded-lg p-2.5 text-gray-400 pointer-events-auto transition-all duration-500 ${
          visible ? "opacity-100 scale-100 animate-bounce" : "opacity-30 scale-50"
        }`}
      >
        <p className="animate-bounce">{notification.contents}</p>
      </div>
    </div>
  ) : null;
};

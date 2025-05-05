import { StateCreator } from "zustand";

type Notification = {
  contents: string;
  error: boolean;
};

export type NotificationSliceType = {
  notification: Notification | null;
  showNotification: (notification: Notification) => void;
  resetNotification: () => void;
};

export const notificationSlice: StateCreator<NotificationSliceType> = (
  set
) => ({
  notification: null,
  showNotification: (notification) => {
    set(() => ({
      notification,
    }));
  },
  resetNotification: () => {
    set(() => ({
      notification: null,
    }));
  },
});

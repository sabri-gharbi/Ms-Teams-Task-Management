export type TaskStatus = "inProgress" | "notSet" | "done" | "todo";

export type Task<T> = T & { status: TaskStatus };

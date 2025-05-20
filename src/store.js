import { create } from "zustand";
import { persist } from "zustand/middleware";
import { format } from "date-fns";

const useStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      darkMode: false,
      categories: ["Personal", "Work", "Shopping", "Housework"],

      // Load tasks from localStorage
      loadTasks: () => {
        // This is handled by the persist middleware
      },

      // Add a new task
      addTask: (text, category = "Personal", dueDate = null) => {
        const newTask = {
          id: Date.now().toString(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
          category,
          dueDate: dueDate ? new Date(dueDate).toISOString() : null,
        };

        set((state) => ({
          tasks: [...state.tasks, newTask],
        }));
      },

      // Toggle task completion
      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        }));
      },

      // Remove a task
      removeTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },

      // Complete all tasks
      completeAllTasks: () => {
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        }));
      },

      // Toggle dark mode
      toggleDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }));
      },

      // Get formatted date
      getFormattedDate: (dateString) => {
        return format(new Date(dateString), "MMM d, yyyy h:mm a");
      },

      // Check if task is overdue
      isTaskOverdue: (task) => {
        if (!task.dueDate || task.completed) return false;
        return new Date(task.dueDate) < new Date();
      },

      // Get tasks by category
      getTasksByCategory: (category) => {
        return get().tasks.filter((task) => task.category === category);
      },

      // Get uncompleted tasks count
      getUncompletedCount: () => {
        return get().tasks.filter((task) => !task.completed).length;
      },

      // Get completed tasks count
      getCompletedCount: () => {
        return get().tasks.filter((task) => task.completed).length;
      },

      // Get total tasks count
      getTotalCount: () => {
        return get().tasks.length;
      },
    }),
    {
      name: "notebook-todo-storage",
    }
  )
);

export { useStore };

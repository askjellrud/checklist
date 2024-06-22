export const queryKeysTemplates = {
  root: () => [...queryKeys.root() /* parent */, "templates"] as const,
  single: (id: string) => [...queryKeysTemplates.root(), id] as const,
  list: () => [...queryKeysTemplates.root(), "list"] as const,
};

export const queryKeysChecks = {
  root: () => [...queryKeys.root() /* parent */, "checks"] as const,
  single: (id: string) => [...queryKeysChecks.root(), id] as const,
  listByChecklist: (checklistId: string) =>
    [...queryKeysChecks.root(), "byChecklist", checklistId] as const,
};

export const queryKeys = {
  root: () => ["checklist"] as const,
  templates: queryKeysTemplates,
  checks: queryKeysChecks,
};


export const queryKeysTemplates = {
    root: () => [...queryKeys.root(), "templates"] as const,
    single: (id: string) => [...queryKeysTemplates.root(), id] as const,
    list: () => [...queryKeysTemplates.root(), "list"] as const
}

export const queryKeys = {
  root: () => ["checklist"] as const,
  templates: queryKeysTemplates
}


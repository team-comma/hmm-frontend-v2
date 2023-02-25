export const key = {
  all: ['users'] as const,
  myProfile: () => [...key.all, 'myProfile'] as const,
} as const;

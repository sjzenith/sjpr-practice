export function login(username, password) {
  if (!username?.trim() || !password?.trim()) {
    return false
  }

  return true
}

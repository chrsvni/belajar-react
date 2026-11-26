export const logger = (store) => (next) => (action) => {
  console.log('➡️ Action:', action)
  const hasil = next(action)
  console.log('⬅️ State sesudahnya:', store.getState())
  return hasil
}

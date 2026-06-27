export function decideAction(trigger: string) {
  if (trigger.includes("error")) return "notify_admin";
  if (trigger.includes("sale")) return "log_success";
  return "noop";
}

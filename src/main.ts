import { setFailed } from "@actions/core";
import { setupGroovy } from "./setup-groovy.js";
import { validateSubscription } from "./subscription.js";

const run = async () => {
  try {
    await validateSubscription();
    await setupGroovy();
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    }
  }
};

void run();

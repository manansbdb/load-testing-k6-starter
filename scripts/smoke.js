import http from "k6/http";
import { check, sleep } from "k6";

/**
 * EN: Smoke load test against a configurable BASE_URL.
 * PT: Smoke de carga contra um BASE_URL configurável.
 */
export const options = {
  vus: 5,
  duration: "30s",
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<500"],
  },
};

const BASE_URL = __ENV.BASE_URL || "https://httpbin.org";

export default function () {
  const res = http.get(`${BASE_URL}/get`);
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}

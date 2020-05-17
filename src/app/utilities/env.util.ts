export abstract class EnvUtil {
  public static get usingNonprod(): boolean {
    const host = window.location.host;
    return host.includes("local") || host.includes("nonprod");
  }
}

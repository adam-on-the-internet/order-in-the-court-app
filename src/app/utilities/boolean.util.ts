
export abstract class BooleanHelper {
  public static notNull(value: any): boolean {
    return value !== null;
  }

  public static notUndefined(value: any): boolean {
    return value !== undefined;
  }

  public static notEmptyText(value: any): boolean {
    return value !== "";
  }

  public static hasValue(value: any): boolean {
    return BooleanHelper.notNull(value) &&
      BooleanHelper.notUndefined(value) &&
      BooleanHelper.notEmptyText(value);
  }
}

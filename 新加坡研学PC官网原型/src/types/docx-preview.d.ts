declare module "docx-preview" {
  export interface Options {
    className?: string
    inWrapper?: boolean
    ignoreWidth?: boolean
    ignoreHeight?: boolean
    breakPages?: boolean
    [key: string]: unknown
  }

  export function renderAsync(
    data: Blob | ArrayBuffer | Uint8Array,
    bodyContainer: HTMLElement,
    styleContainer?: HTMLElement,
    options?: Options
  ): Promise<void>
}

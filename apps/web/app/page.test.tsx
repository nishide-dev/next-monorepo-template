import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Page from "./page"

describe("Page", () => {
  it("renders the hello world heading", () => {
    render(<Page />)
    expect(screen.getByRole("heading", { name: "Hello World" })).toBeInTheDocument()
  })
})

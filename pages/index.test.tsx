import { shallow } from "enzyme"
import Index from "./index"

describe("인덱스 페이지", () => {
  it("렌더링", () => {
    const wrapper = shallow(<Index />)
    expect(wrapper).toBeTruthy()
  })
})

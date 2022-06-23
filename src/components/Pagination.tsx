import { spawn } from "child_process"
import React, { FunctionComponent, useMemo } from "react"

interface PropsType {
  page: number
  pagesCount: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: FunctionComponent<PropsType> = ({
  page,
  pagesCount,
  setPage,
}) => {
  const arr = useMemo(
    () =>
      Array(pagesCount)
        .fill(1)
        .map((_, i) => i + 1),
    [pagesCount]
  )

  const returnFilteredArr = () => {
    const index = arr.indexOf(page)
    if (index < 2) return arr.slice(0, index + 3)
    return arr.slice(index - 2, index + 3)
  }

  if (!page) return null

  return (
    <div className="text-center mt-8 text-lg">
      {page > 1 && (
        <span
          className="mx-4 px-2 py-1 border rounded-l-md cursor-pointer hover:bg-gray-300"
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </span>
      )}
      {returnFilteredArr().map((item) => (
        <span
          key={item}
          onClick={() => setPage(item)}
          className={`px-2 py-1 cursor-pointer hover:underline hover:font-bold rounded-sm ${
            item === page && "bg-gray-400 text-white"
          }`}
        >
          {item}
        </span>
      ))}
      {pagesCount > page && (
        <span
          className="mx-4 px-2 py-1 border rounded-r-md cursor-pointer hover:bg-gray-300"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </span>
      )}
    </div>
  )
}

export default Pagination

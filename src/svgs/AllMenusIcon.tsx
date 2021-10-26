import styled from 'styled-components'

const Path = styled.path`
  fill: #ff7957;
  stroke: #ff6359;
  stroke-miterlimit: 10;
`

type Props = {
  selected?: boolean
}

function AllMenusIcon({ selected }: Props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 68 68">
      <g transform="translate(-18 -138)">
        <g fill={selected ? '#ffece5' : '#fff'}>
          <path
            d="M52 67.35H16a15.25 15.25 0 01-10.854-4.496A15.25 15.25 0 01.65 52V16c0-4.1 1.597-7.955 4.496-10.854A15.25 15.25 0 0116 .65h36c4.1 0 7.955 1.597 10.854 4.496A15.25 15.25 0 0167.35 16v36c0 4.1-1.597 7.955-4.496 10.854A15.25 15.25 0 0152 67.35z"
            transform="translate(18 138)"
          />
          <path
            d="M16 1.3c-3.927 0-7.618 1.53-10.394 4.306A14.604 14.604 0 001.3 16v36c0 3.927 1.53 7.618 4.306 10.394A14.604 14.604 0 0016 66.7h36c3.927 0 7.618-1.53 10.394-4.306A14.604 14.604 0 0066.7 52V16c0-3.927-1.53-7.618-4.306-10.394A14.604 14.604 0 0052 1.3H16M16 0h36c8.837 0 16 7.163 16 16v36c0 8.837-7.163 16-16 16H16C7.163 68 0 60.837 0 52V16C0 7.163 7.163 0 16 0z"
            transform="translate(18 138)"
            fill="#f0f0f0"
          />
        </g>
        <g transform="translate(-357.079 100.733)">
          <g id="prefix__\uADF8\uB8F9_646" data-name="\uADF8\uB8F9 646">
            <Path d="M405.946 72.7a56.227 56.227 0 00-5.746-14.03 2.005 2.005 0 00-2.249-.936l-.029.009a1.906 1.906 0 00-1.1.9c-2.328 4.162-3.833 12.566-4.369 15.963a.91.91 0 001.212.994 23.298 23.298 0 002.021-.818.9.9 0 00.491-.665l.563-3.359a1 1 0 01.586-.754c.558-.246 1.487-.639 2.25-.89a1 1 0 011.249.594 102.898 102.898 0 011.549 4.3.974.974 0 001.323.59l1.5-.664a1.064 1.064 0 00.749-1.234zm-6.153-6.546l-1.764.526a.392.392 0 01-.5-.452c.187-.965.451-1.956.649-2.642a.389.389 0 01.717-.075l1.128 2.087a.388.388 0 01-.23.554z" />
          </g>
          <Path d="M405.658 58.74a19.142 19.142 0 012.472-.717.554.554 0 01.657.42c.38 1.73 1.319 7.8 1.955 10.553a.177.177 0 00.268.124l1.973-1.2a.388.388 0 01.559.171 10.6 10.6 0 01.716 2.095.373.373 0 01-.159.385A16.307 16.307 0 01408.74 73a.166.166 0 01-.191-.115 127.294 127.294 0 01-3.258-13.529.559.559 0 01.367-.616z" />
          <Path d="M413.563 55.995a19.3 19.3 0 012.472-.717.555.555 0 01.658.421c.379 1.729 1.319 7.8 1.954 10.552a.177.177 0 00.268.124l1.973-1.2a.389.389 0 01.559.172 10.574 10.574 0 01.716 2.1.372.372 0 01-.159.384 16.286 16.286 0 01-5.359 2.43.166.166 0 01-.191-.115 127.289 127.289 0 01-3.254-13.533.559.559 0 01.363-.618z" />
          <Path d="M392.561 80.679c4.353-1.2 26.82-7.367 33.166-8.981a.654.654 0 01.8.487c.106.44.249 1.077.391 1.824a.661.661 0 01-.464.765c-4.073 1.155-28.583 8.089-32.772 9.02a.656.656 0 01-.743-.384l-.8-1.826a.658.658 0 01.422-.905z" />
          <Path d="M397.378 84.784c3.7-1.192 22.782-7.339 28.177-8.964a.563.563 0 01.707.389c.108.374.255.916.4 1.553a.57.57 0 01-.371.676c-3.458 1.145-24.27 8.025-27.837 8.982a.561.561 0 01-.652-.3l-.76-1.54a.567.567 0 01.336-.796z" />
        </g>
      </g>
    </svg>
  )
}

export default AllMenusIcon

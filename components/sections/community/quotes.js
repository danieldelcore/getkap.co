function resizeGridItem(item) {
  let grid = document.getElementsByClassName('grid')[0]
  let rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
  )
  let rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
  )
  let rowSpan = Math.ceil(
    (item.querySelector('.card').getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  )
  item.style.gridRowEnd = 'span ' + rowSpan
}

function resizeAllGridItems() {
  let allItems = document.getElementsByClassName('item')

  for (var x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x])
  }
}
const Quote = ({ handle, name, text }) => (
  <div className="item">
    <div className="card">
      <p>{text}</p>
      <div className="quote-info">
        <span className="name">{name}</span>
        <a href={`https://twitter.com/${handle}`} className="handle">
          {handle}
        </a>
      </div>

      <style jsx>{`
        .card {
          width: 100%;
          // min-width:
          border-radius: 4px;
          background-color: #f9f9f9;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        p {
          color: #000000;
          line-height: 1.43;
          font-size: 14px;
          font-weight: normal;
          margin-bottom: 16px;
        }
        a:hover {
          text-decoration: underline;
        }
        .quote-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .name {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.43;
          color: #000000;
        }
        .handle {
          font-size: 14px;
          font-weight: normal;
          line-height: 1.43;
          color: #808080;
        }
      `}</style>
    </div>
  </div>
)
export default class Quotes extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', resizeAllGridItems)
    resizeAllGridItems()
  }
  render() {
    return (
      <div className="grid">
        <Quote
          handle="@michaelschultz"
          name="Michael Schultz"
          text="Kap is maybe the best GIF recorder I’ve used so far."
        />
        <Quote
          handle="@ThrivingKings"
          name="Daniel Raftery"
          text="I can't recommend Kap enough. Sprinkle your bugs/PRs with animated GIF screen captures. It's seriously awesome."
        />
        <Quote
          handle="@boogah"
          name="Jason Cosper"
          text="Been looking for a nice, easy to use screen recorder. Kap seems to fit the bill. Bonus: it’s open source."
        />
        <Quote
          handle="@boogah"
          name="Max Stoiber"
          text="Extremely impressed with the Kap 1.0 release; this is the best screen recorder ever, built with web technologies! 💯"
        />

        <Quote
          handle="@jeffreydgroot"
          name="Jeffrey de Groot"
          text="Kap makes it really easy to record and export screen captures. And it looks nice :)"
        />
        <Quote
          handle="@ThrivingKings"
          name="Daniel Raftery"
          text="I can't recommend Kap enough. Sprinkle your bugs/PRs with animated GIF screen captures. It's seriously awesome."
        />
        <Quote
          handle="@boogah"
          name="Jason Cosper"
          text="Been looking for a nice, easy to use screen recorder. Kap seems to fit the bill. Bonus: it’s open source."
        />
        <Quote
          handle="@boogah"
          name="Max Stoiber"
          text="Extremely impressed with the Kap 1.0 release; this is the best screen recorder ever, built with web technologies! 💯"
        />

        <style jsx>{`
          // div {
          //   max-width: 1800px;
          //   width: 100%;

          //   display: grid;
          //   grid-auto-rows: 32px;

          //   grid-gap: 32px;
          //   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          // }
          .grid {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-rows: 20px;
          }
        `}</style>
      </div>
    )
  }
}

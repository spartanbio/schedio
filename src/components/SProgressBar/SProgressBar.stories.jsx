import { SProgressBar } from '@/components/SProgressBar'
import { colors, sizes } from '@/components/SProgressBar/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { generateHeading } from '@/utils/stories/render-functions'
import { SButton } from '@/components/SButton'

storiesOf('Components/Loading.SProgressBar', module)
  .addParameters({ jest: 'SProgressBar' })
  .add('Progress Bar', () => {
    return {
      props: {
        props: {
          default: () => ({
            progress: number('progress', 30, { range: true, min: 0, max: 100 }, 'Required Props'),
            size: select('size', ['', ...sizes], '', 'Optional Props'),
            color: select('color', ['', ...colors], '', 'Optional Props'),
            message: text('message', 'Something is happening', 'Optional Props'),
            hidePercentComplete: boolean('hide-percent-complete', true, 'Optional Props'),
          }),
        },
      },
      render (h) {
        return (
          <div>
            <SHeading level="1">Progress Bar</SHeading>
            <p>Progress bars visually represent the completion of a task.</p>

            <SHeading level="2">Example</SHeading>
            <SProgressBar {...{ props: this.$props.props }} />

            {SProgressBar.props && <PropList component={SProgressBar} />}
          </div>
        )
      },
    }
  })
  .add(
    'Progress Bar Examples',
    () => ({
      components: {
        AnimatedProgressBar: {
          name: 'AnimatedProgressBar',
          data () {
            return {
              start: null,
              barPosition: 0,
              shouldCountUp: true,
              duration: 10 * 1000, // 10 seconds
              req: null,
            }
          },
          destroyed () {
            this.cancelAnimation()
          },
          methods: {
            animateProgress (now) {
              /**
               * animate the progress bar over 10 seconds
               * Example: 10s = 10000ms, 10000ms / 100 ticks = 100 ms/tick
               */
              if (!this.start || now - this.start >= this.duration / 100) {
                this.start = now
                if (this.barPosition === 0) this.shouldCountUp = true

                if (this.barPosition === 100) this.shouldCountUp = false

                this.shouldCountUp ? this.barPosition++ : this.barPosition--
              }

              this.req = window.requestAnimationFrame(this.animateProgress)
            },
            cancelAnimation () {
              window.cancelAnimationFrame(this.req)
              this.req = null
            },
            startAnimation () {
              this.req = window.requestAnimationFrame(this.animateProgress)
            },
          },
          render (h) {
            return (
              <div>
                <SProgressBar progress={this.barPosition} message="Animation" />
                <SButton
                  color="night"
                  size="small"
                  is-outlined
                  onClick={() => (this.req ? this.cancelAnimation() : this.startAnimation())}
                >
                  {this.req ? 'Stop ' : 'Start '}
                  animation
                </SButton>
              </div>
            )
          },
        },
      },
      render (h) {
        return (
          <div>
            <SHeading>Progress Bar Examples</SHeading>

            <SHeading level="2">Animated</SHeading>
            <AnimatedProgressBar />

            <SHeading level="2">Colors</SHeading>
            {colors.map(color => generateProgressBar(h, color))}
          </div>
        )
      },
    }),
    {
      options: {
        showPanel: false,
      },
    }
  )

function generateProgressBar (h, color) {
  return [
    generateHeading(h, { level: 3, content: color }),
    h(SProgressBar, { props: { color, progress: Math.floor(Math.random() * 100) } }),
  ]
}

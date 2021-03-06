import { h } from 'hyperapp'
import Layout from '../Layout'
import { Panel, ContentBlock, Toast } from '../components'

const key = 'panel'

const PanelContent = (close) => {
  return (
    <ContentBlock title="Panel content here">
      <p onclick={close}>Close me</p>
    </ContentBlock>
  )
}

export default {
  path: '/panel',
  key,
  title: 'Side Panel',
  state: {
    outsidePanel: false,
    position: 'left'
  },
  actions: {
    outsidePanel: ({ show, position }) => {
      return { outsidePanel: show, position }
    }
  },
  noLayout: true,
  view: (state, actions) => {
    const closeOutsidePanel = () => actions.outsidePanel({ show: false })

    return (
      <Layout
        key={key}
        title="Panels"
        outside={state.outsidePanel &&
          <Panel
            effect="cover"
            position={state.position}
            onOverlayClick={closeOutsidePanel}
            onOpen={() => Toast.text('Panel open')}
            onOpened={() => Toast.text('Panel opened')}
            onClose={() => Toast.text('Panel close')}
            onClosed={() => Toast.text('Panel closed')}
          >
            {PanelContent(closeOutsidePanel)}
          </Panel>
        }
      >
        <ContentBlock title="Open by action">
          <p
            onclick={() => {
              actions.outsidePanel({ show: true, position: 'left' })
            }}
          >
            open left panel
          </p>
          <p
            onclick={() => {
              actions.outsidePanel({ show: true, position: 'right' })
            }}
          >
            open right panel
          </p>
        </ContentBlock>

        <ContentBlock title="Open by method">
          <p
            onclick={() => {
              Panel.open({
                content: PanelContent(Panel.close)
              })
            }}
          >
            open left panel
          </p>
          <p
            onclick={() => {
              Panel.open({
                position: 'right',
                content: PanelContent(Panel.close)
              })
            }}
          >
            open right panel
          </p>
        </ContentBlock>
      </Layout>
    )
  }
}

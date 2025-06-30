export default {
  editor: {
    label: {
      en: "shadcn Tabs",
      fr: "Onglets shadcn"
    },
    icon: 'fas fa-folder-open',
    bubble: {
      icon: 'fas fa-folder-open'
    },
    deprecated: false
  },
  properties: {
    defaultTab: {
      label: {
        en: "Default active tab",
        fr: "Onglet actif par défaut"
      },
      type: "Number",
      defaultValue: 0,
      bindable: true,
      section: "behavior"
    },
    orientation: {
      label: {
        en: "Orientation",
        fr: "Orientation"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "horizontal", label: { en: "Horizontal", fr: "Horizontal" } },
          { value: "vertical", label: { en: "Vertical", fr: "Vertical" } }
        ]
      },
      defaultValue: "horizontal",
      section: "layout"
    },
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "sm", label: { en: "Small", fr: "Petit" } },
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "lg", label: { en: "Large", fr: "Grand" } }
        ]
      },
      defaultValue: "default",
      section: "appearance"
    },
    tabs: {
      label: {
        en: "Tabs",
        fr: "Onglets"
      },
      type: "Info",
      options: {
        text: { 
          en: "Configure tabs in the repeater below",
          fr: "Configurez les onglets dans le répéteur ci-dessous"
        }
      },
      section: "content"
    },
    changeWorkflowId: {
      label: {
        en: "Change workflow",
        fr: "Workflow de changement"
      },
      type: "WorkflowId",
      bindable: true,
      section: "behavior"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  events: {
    change: {
      label: {
        en: "On tab change",
        fr: "Lors du changement d'onglet"
      },
      default: null
    }
  },
  sections: {
    content: {
      label: { en: "Content", fr: "Contenu" },
      expand: true
    },
    layout: {
      label: { en: "Layout", fr: "Disposition" },
      expand: true
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: false
    },
    behavior: {
      label: { en: "Behavior", fr: "Comportement" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 
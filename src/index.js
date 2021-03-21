import InterfaceComponent from './interface.vue';

export default {
    id: 'go-conditional-fields',
    name: 'Conditional Fields',
    description: 'Allows conditionally switching other fields',
    icon: 'box',
    component: InterfaceComponent,
    types: ['json'],
    options: [
        {
            field: "conditions",
            name: "Conditions",
            type: "json"
        },
        {
            field: "hideByDefault",
            name: "Hide all fields by default",
            meta: {
                note: "If toggle field has no default value set, this extensions hides nothing by default"
            },
            type: "boolean"
        },
        {
            field: "debug",
            name: "Debug",
            type: "boolean"
        }
    ]
};

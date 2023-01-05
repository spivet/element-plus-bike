import type { DefineComponent } from 'vue';
import type { ColProps } from '@arco-design/web-vue';
import type { FormInstance, FormItemInstance } from '@arco-design/web-vue/es/form';

export type BaseComponentProps = InstanceType<DefineComponent>['$props']

export type FormProps = Omit<FormInstance['$props'], keyof BaseComponentProps | 'onSubmit' | 'model'>
export type FormItemProps = Omit<FormItemInstance['$props'], keyof BaseComponentProps>
export interface FieldOptions {
    value: any,
    label: string
}
export interface Field {
    colAttrs?: ColProps,
    formItemAtrrs?: FormItemProps,
    component?: string,
    componentAttrs?: any,
    label: string,
    prop: string,
    options?: FieldOptions[]
}

interface QueryFormProps {
    modelValue: any,
    formProps?: FormProps,
    fields: Field[],
    showOperation?: boolean,
    submitBtnText?: string,
    resetBtnText?: string,
    collapse?: boolean,
    showCollapseBtn?: boolean,
}

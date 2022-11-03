import type { DefineComponent } from 'vue';
import { FormInstance, FormItemInstance } from '@arco-design/web-vue/es/form';

export type BaseProps = InstanceType<DefineComponent>['$props']

export interface FieldOptions {
    value: any,
    label: string
}
type FormProps = Partial<Omit<FormInstance['$props'], keyof BaseProps>>
type FormItemProps = Omit<FormItemInstance['$props'], keyof BaseProps>
interface Field extends FormItemProps {
    component?: any,
    componentAttrs?: any,
    options?: FieldOptions[]
}
interface Props {
    modelValue: any,
    formProps?: FormProps,
    fields: Field[],
    showOperation?: boolean,
    submitBtnText?: string,
    resetBtnText?: string,
    collapse?: boolean,
    showCollapseBtn?: boolean,
}

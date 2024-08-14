import { Builder } from "@builder.io/react";
import {
  Button,
  Checkbox,
  IconButton,
  LikeButton,
  LocalGasStation,
  NotificationButton,
  People,
  Radio,
  Search,
  SearchButton,
  Select,
  SettingsButton,
  SwapButton,
  TextField,
  Tune,
  TuneButton,
} from "./components/builderio";

Builder.registerComponent(Checkbox, {
  name: "Checkbox",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "checked",
      type: "boolean",
    },
    {
      name: "checkedIcon",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<CheckboxClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "default",
        "error",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "edge",
      type: "string",
      enum: ["end", "start"],
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "icon",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "indeterminate",
      type: "boolean",
    },
    {
      name: "indeterminateIcon",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputHTMLAttributes<HTMLInputElement>",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<HTMLInputElement>",
      },
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "ref",
      type: "string",
      meta: {
        ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
      },
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
  ],
});

Builder.registerComponent(TextField, {
  name: "TextField",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TextFieldClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: ["error", "info", "primary", "secondary", "success", "warning"],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "focused",
      type: "boolean",
    },
    {
      name: "FormHelperTextProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FormHelperTextProps>",
      },
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "helperText",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "hiddenLabel",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "InputLabelProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<InputLabelProps>",
      },
    },
    {
      name: "InputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FilledInputProps>",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputBaseComponentProps",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<any>",
      },
    },
    {
      name: "label",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "margin",
      type: "string",
      enum: ["dense", "none", "normal"],
    },
    {
      name: "maxRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "minRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "multiline",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "rows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "select",
      type: "boolean",
    },
    {
      name: "SelectProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SelectProps>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["medium", "small"],
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "type",
      type: "string",
      meta: {
        ts: "HTMLInputTypeAttribute",
      },
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
    {
      name: "variant",
      type: "string",
      meta: {
        ts: "Variant",
      },
    },
  ],
});

Builder.registerComponent(Select, {
  name: "Select",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
    },
    {
      name: "autoWidth",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SelectClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: ["error", "info", "primary", "secondary", "success", "warning"],
    },
    {
      name: "components",
      type: "string",
      meta: {
        ts: "{ Root?: ElementType<any, keyof IntrinsicElements>; Input?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ root?: HTMLAttributes<HTMLDivElement> & InputBaseComponentsPropsOverrides; input?: InputHTMLAttributes<HTMLInputElement> & InputBaseComponentsPropsOverrides; }",
      },
    },
    {
      name: "defaultOpen",
      type: "boolean",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableInjectingGlobalStyles",
      type: "boolean",
    },
    {
      name: "disableUnderline",
      type: "boolean",
    },
    {
      name: "displayEmpty",
      type: "boolean",
    },
    {
      name: "endAdornment",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "IconComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "input",
      type: "string",
      meta: {
        ts: "ReactElement<any, any>",
      },
    },
    {
      name: "inputComponent",
      type: "string",
      meta: {
        ts: "ElementType<InputBaseComponentProps, keyof IntrinsicElements>",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputBaseComponentProps",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<any>",
      },
    },
    {
      name: "label",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "labelId",
      type: "string",
    },
    {
      name: "margin",
      type: "string",
      enum: ["dense", "none"],
    },
    {
      name: "maxRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "MenuProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<MenuProps>",
      },
    },
    {
      name: "minRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "multiline",
      type: "boolean",
    },
    {
      name: "multiple",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "native",
      type: "boolean",
    },
    {
      name: "open",
      type: "boolean",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "ref",
      type: "string",
      meta: {
        ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
      },
    },
    {
      name: "renderSuffix",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: '(state: { disabled?: boolean; error?: boolean; filled?: boolean; focused?: boolean; margin?: "none" | "dense" | "normal"; required?: boolean; startAdornment?: any; }) => any',
      },
    },
    {
      name: "renderValue",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(value: Value) => any",
      },
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "rows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "SelectDisplayProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "HTMLAttributes<HTMLDivElement>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["medium", "small"],
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ root?: HTMLAttributes<HTMLDivElement> & InputBaseComponentsPropsOverrides & { sx?: SxProps<Theme>; }; input?: InputHTMLAttributes<...> & ... 1 more ... & { ...; }; }",
      },
    },
    {
      name: "slots",
      type: "string",
      meta: {
        ts: "{ root?: ElementType<any, keyof IntrinsicElements>; input?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "startAdornment",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "type",
      type: "string",
    },
    {
      name: "value",
      type: "string",
      enum: [""],
    },
    {
      name: "variant",
      type: "string",
      enum: ["filled"],
      required: true,
    },
  ],
});

Builder.registerComponent(Radio, {
  name: "Radio",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "checked",
      type: "boolean",
    },
    {
      name: "checkedIcon",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<RadioClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "default",
        "error",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "edge",
      type: "string",
      enum: ["end", "start"],
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "icon",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputHTMLAttributes<HTMLInputElement>",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<any>",
      },
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "ref",
      type: "string",
      meta: {
        ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
      },
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "size",
      type: "string",
      enum: ["medium", "small"],
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
  ],
});

Builder.registerComponent(IconButton, {
  name: "IconButton",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<IconButtonClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "default",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "edge",
      type: "string",
      enum: ["end", "start"],
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "href",
      type: "string",
      required: true,
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
  ],
});

Builder.registerComponent(SettingsButton, {
  name: "SettingsButton",
});

Builder.registerComponent(NotificationButton, {
  name: "NotificationButton",
});

Builder.registerComponent(LikeButton, {
  name: "LikeButton",
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<ButtonClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableElevation",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "endIcon",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "href",
      type: "string",
      required: true,
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "startIcon",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["contained", "outlined", "text"],
    },
  ],
});

Builder.registerComponent(Tune, {
  name: "Tune",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SvgIconClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "action",
        "disabled",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      required: true,
    },
    {
      name: "fontSize",
      type: "string",
      enum: ["inherit", "large", "medium", "small"],
    },
    {
      name: "htmlColor",
      type: "string",
    },
    {
      name: "inheritViewBox",
      type: "boolean",
    },
    {
      name: "shapeRendering",
      type: "string",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "titleAccess",
      type: "string",
    },
    {
      name: "viewBox",
      type: "string",
    },
  ],
});

Builder.registerComponent(Search, {
  name: "Search",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SvgIconClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "action",
        "disabled",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      required: true,
    },
    {
      name: "fontSize",
      type: "string",
      enum: ["inherit", "large", "medium", "small"],
    },
    {
      name: "htmlColor",
      type: "string",
    },
    {
      name: "inheritViewBox",
      type: "boolean",
    },
    {
      name: "shapeRendering",
      type: "string",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "titleAccess",
      type: "string",
    },
    {
      name: "viewBox",
      type: "string",
    },
  ],
});

Builder.registerComponent(People, {
  name: "People",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SvgIconClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "action",
        "disabled",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      required: true,
    },
    {
      name: "fontSize",
      type: "string",
      enum: ["inherit", "large", "medium", "small"],
    },
    {
      name: "htmlColor",
      type: "string",
    },
    {
      name: "inheritViewBox",
      type: "boolean",
    },
    {
      name: "shapeRendering",
      type: "string",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "titleAccess",
      type: "string",
    },
    {
      name: "viewBox",
      type: "string",
    },
  ],
});

Builder.registerComponent(LocalGasStation, {
  name: "LocalGasStation",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SvgIconClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "action",
        "disabled",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      required: true,
    },
    {
      name: "fontSize",
      type: "string",
      enum: ["inherit", "large", "medium", "small"],
    },
    {
      name: "htmlColor",
      type: "string",
    },
    {
      name: "inheritViewBox",
      type: "boolean",
    },
    {
      name: "shapeRendering",
      type: "string",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "titleAccess",
      type: "string",
    },
    {
      name: "viewBox",
      type: "string",
    },
  ],
});

Builder.registerComponent(TuneButton, {
  name: "TuneButton",
});

Builder.registerComponent(SearchButton, {
  name: "SearchButton",
});

Builder.registerComponent(SwapButton, {
  name: "SwapButton",
});

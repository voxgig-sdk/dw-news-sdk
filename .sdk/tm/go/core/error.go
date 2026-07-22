package core

type DwNewsError struct {
	IsDwNewsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDwNewsError(code string, msg string, ctx *Context) *DwNewsError {
	return &DwNewsError{
		IsDwNewsError: true,
		Sdk:              "DwNews",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DwNewsError) Error() string {
	return e.Msg
}

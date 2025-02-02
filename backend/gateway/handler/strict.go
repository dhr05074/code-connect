package handler

import (
	"code-connect/gateway"
	"code-connect/problem"
	"code-connect/record"
	"code-connect/user"
	"context"
)

type StrictHandler struct {
	problemHandler *problem.Handler
	recordHandler  *record.Handler
	userHandler    *user.Handler
}

func (s *StrictHandler) GetMe(ctx context.Context, request gateway.GetMeRequestObject) (gateway.GetMeResponseObject, error) {
	return s.userHandler.GetMe(ctx, request)
}

func (s *StrictHandler) RequestProblem(ctx context.Context, request gateway.RequestProblemRequestObject) (gateway.RequestProblemResponseObject, error) {
	return s.problemHandler.RequestProblem(ctx, request)
}

func (s *StrictHandler) GetProblem(ctx context.Context, request gateway.GetProblemRequestObject) (gateway.GetProblemResponseObject, error) {
	return s.problemHandler.GetProblem(ctx, request)
}

func (s *StrictHandler) GetRecords(ctx context.Context, request gateway.GetRecordsRequestObject) (gateway.GetRecordsResponseObject, error) {
	return s.recordHandler.GetRecords(ctx, request)
}

func (s *StrictHandler) GetRecord(ctx context.Context, request gateway.GetRecordRequestObject) (gateway.GetRecordResponseObject, error) {
	return s.recordHandler.GetRecord(ctx, request)
}

func (s *StrictHandler) SubmitSolution(ctx context.Context, request gateway.SubmitSolutionRequestObject) (gateway.SubmitSolutionResponseObject, error) {
	return s.recordHandler.SubmitSolution(ctx, request)
}

func NewStrictHandler(problemHandler *problem.Handler, recordHandler *record.Handler, userHandler *user.Handler) *StrictHandler {
	return &StrictHandler{
		problemHandler: problemHandler, recordHandler: recordHandler, userHandler: userHandler,
	}
}

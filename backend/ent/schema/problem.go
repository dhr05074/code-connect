package schema

import (
	"code-connect/gateway"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Problem holds the schema definition for the Problem entity.
type Problem struct {
	ent.Schema
}

// Fields of the Problem.
func (Problem) Fields() []ent.Field {
	return []ent.Field{
		field.Int("id").Unique().StructTag("-"),
		field.String("uuid").Unique().StructTag("id"),
		field.Text("code").Optional(),
		field.String("title").Optional(),
		field.String("language").GoType(gateway.ProgrammingLanguage("")),
		field.String("description").Optional(),
		field.Int("difficulty").Min(0).Max(3000).Default(1500),
		field.Int("readability").Default(0),
		field.Int("robustness").Default(0),
		field.Int("efficiency").Default(0),
	}
}

// Edges of the Problem.
func (Problem) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("records", Record.Type),
	}
}

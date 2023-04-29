package keeper

import (
	"blog/x/tokenfactory/types"
)

var _ types.QueryServer = Keeper{}

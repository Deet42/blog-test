package keeper_test

import (
	"context"
	"testing"

	keepertest "blog/testutil/keeper"
	"blog/x/tokenfactory/keeper"
	"blog/x/tokenfactory/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TokenfactoryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

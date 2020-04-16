import * as React from 'react';
import Grid from 'material-ui/Grid';

function Colors() {
    return (
        <div className="sg-section">
            <div className="sg-display">
                <h2 className="sg-h2">Colors</h2>
                <Grid container={true} style={{ paddingBottom: '18px' }}>
                    <Grid item={true} xs={12}>
                        <h4>Message/Alert Colors</h4>
                        <div className="sg-swatch">
                            <div className="sg-color">
                                <div className="sg-color-cta success">
                                    <div className="bg-color">
                                        <span>Success</span>
                                    </div>
                                </div>
                            </div>
                            <label>Success</label>
                        </div>
                        <div className="sg-swatch">
                            <div className="sg-color">
                                <div className="sg-color-cta warn">
                                    <div className="bg-color">
                                        <span>Warn</span>
                                    </div>
                                </div>
                            </div>
                            <label>Warn</label>
                        </div>
                        <div className="sg-swatch">
                            <div className="sg-color">
                                <div className="sg-color-cta danger">
                                    <div className="bg-color">
                                        <span>Danger</span>
                                    </div>
                                </div>
                            </div>
                            <label>Danger</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <h4>Application Colors</h4>
                        <div className="sg-swatch">
                            <div className="sg-color">
                                <div className="sg-color-cta appPrimaryColor">
                                    <div className="bg-color">
                                        <span>#37546a</span>
                                    </div>
                                </div>
                            </div>
                            <label>Primary App Color</label>
                        </div>
                        <div className="sg-swatch">
                            <div className="sg-color">
                                <div className="sg-color-cta anchors">
                                    <div className="bg-color">
                                        <span>#820900</span>
                                    </div>
                                </div>
                            </div>
                            <label>Secondary</label>
                        </div>
                        <div className="sg-swatch">
                            <div className="sg-color">
                                <div className="sg-color-cta bodyText">
                                    <div className="bg-color">
                                        <span>#191919</span>
                                    </div>
                                </div>
                            </div>
                            <label>Body Text</label>
                        </div>
                        <div className="sg-swatch">
                            <div className="sg-color">
                                <div className="sg-color-cta headerText">
                                    <div className="bg-color">
                                        <span>#191919</span>
                                    </div>
                                </div>
                            </div>
                            <label>Header Text</label>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Colors;
